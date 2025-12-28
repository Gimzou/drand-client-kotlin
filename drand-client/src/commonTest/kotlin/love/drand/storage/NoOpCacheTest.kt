package love.drand.storage

import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class NoOpCacheTest {
    @Test
    fun `get should always return null`() {
        val cache = NoOpCache<String, String>()

        assertNull(cache.get("any-key"))
        assertNull(cache.get("another-key"))
    }

    @Test
    fun `put should not store values`() =
        runTest {
            val cache = NoOpCache<String, Int>()

            cache.put("key1", 100)
            cache.put("key2", 200)

            // Verify nothing was stored
            assertNull(cache.get("key1"))
            assertNull(cache.get("key2"))
        }

    @Test
    fun `getOrPut should always invoke defaultValue and not cache result`() =
        runTest {
            val cache = NoOpCache<String, String>()
            var invocationCount = 0

            val defaultValue: suspend () -> String = {
                invocationCount++
                "computed-value-$invocationCount"
            }

            // First call
            val result1 = cache.getOrPut("key", defaultValue)
            assertEquals("computed-value-1", result1)
            assertEquals(1, invocationCount)

            // Second call with same key - should invoke defaultValue again (not cached)
            val result2 = cache.getOrPut("key", defaultValue)
            assertEquals("computed-value-2", result2)
            assertEquals(2, invocationCount)

            // Third call with different key - still invokes defaultValue
            val result3 = cache.getOrPut("other-key", defaultValue)
            assertEquals("computed-value-3", result3)
            assertEquals(3, invocationCount)
        }

    @Test
    fun `contains should always return false`() {
        val cache = NoOpCache<String, Any>()

        assertFalse(cache.contains("any-key"))
        assertFalse(cache.contains("another-key"))
    }

    @Test
    fun `contains should return false even after put`() =
        runTest {
            val cache = NoOpCache<String, String>()

            cache.put("key", "value")

            assertFalse(cache.contains("key"))
        }

    @Test
    fun `remove should always return null`() =
        runTest {
            val cache = NoOpCache<String, String>()

            assertNull(cache.remove("any-key"))

            // Even after putting something
            cache.put("key", "value")
            assertNull(cache.remove("key"))
        }

    @Test
    fun `clear should be no-op`() =
        runTest {
            val cache = NoOpCache<String, String>()

            cache.put("key1", "value1")
            cache.put("key2", "value2")

            cache.clear()

            // Verify nothing changed (still empty)
            assertEquals(0, cache.size())
            assertTrue(cache.isEmpty())
        }

    @Test
    fun `size should always return 0`() =
        runTest {
            val cache = NoOpCache<String, String>()

            assertEquals(0, cache.size())

            // Even after putting values
            cache.put("key1", "value1")
            cache.put("key2", "value2")
            cache.put("key3", "value3")

            assertEquals(0, cache.size())
        }

    @Test
    fun `keys should always return empty set`() =
        runTest {
            val cache = NoOpCache<String, String>()

            assertTrue(cache.keys().isEmpty())

            // Even after putting values
            cache.put("key1", "value1")
            cache.put("key2", "value2")

            val keys = cache.keys()
            assertTrue(keys.isEmpty())
            assertEquals(emptySet(), keys)
        }

    @Test
    fun `values should always return empty collection`() =
        runTest {
            val cache = NoOpCache<String, String>()

            assertTrue(cache.values().isEmpty())

            // Even after putting values
            cache.put("key1", "value1")
            cache.put("key2", "value2")

            val values = cache.values()
            assertTrue(values.isEmpty())
            assertEquals(emptyList(), values)
        }

    @Test
    fun `isEmpty should always return true`() =
        runTest {
            val cache = NoOpCache<String, String>()

            assertTrue(cache.isEmpty())

            // Even after putting values
            cache.put("key1", "value1")
            cache.put("key2", "value2")

            assertTrue(cache.isEmpty())
        }

    @Test
    fun `concurrent operations should not affect behavior`() =
        runTest {
            val cache = NoOpCache<String, String>()

            // Simulate concurrent puts
            cache.put("key1", "value1")
            cache.put("key2", "value2")
            cache.put("key3", "value3")

            // All operations should still result in empty cache
            assertEquals(0, cache.size())
            assertTrue(cache.isEmpty())
            assertNull(cache.get("key1"))
            assertNull(cache.get("key2"))
            assertNull(cache.get("key3"))
        }
}
