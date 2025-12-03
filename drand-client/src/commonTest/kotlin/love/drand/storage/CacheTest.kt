package love.drand.storage

import kotlinx.coroutines.test.runTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class CacheTest {
    @Test
    fun `get returns null for missing entry`() {
        val cache = Cache<String, String>()
        assertNull(cache.get("nonexistent"))
    }

    @Test
    fun `put and get work correctly`() =
        runTest {
            val cache = Cache<String, String>()

            cache.put("key", "value")

            assertEquals("value", cache.get("key"))
        }

    @Test
    fun `contains returns correct values`() =
        runTest {
            val cache = Cache<String, String>()

            assertFalse(cache.contains("key"))

            cache.put("key", "value")

            assertTrue(cache.contains("key"))
        }

    @Test
    fun `clear removes all entries`() =
        runTest {
            val cache = Cache<String, String>()

            cache.put("key1", "value1")
            cache.put("key2", "value2")

            assertEquals(2, cache.size())

            cache.clear()

            assertEquals(0, cache.size())
            assertTrue(cache.isEmpty())
        }

    @Test
    fun `remove deletes specific entry`() =
        runTest {
            val cache = Cache<String, String>()

            cache.put("key1", "value1")
            cache.put("key2", "value2")

            val removed = cache.remove("key1")

            assertEquals("value1", removed)
            assertNull(cache.get("key1"))
            assertTrue(cache.contains("key2"))
        }

    @Test
    fun `size returns correct count`() =
        runTest {
            val cache = Cache<String, String>()

            assertEquals(0, cache.size())

            cache.put("key1", "value1")
            assertEquals(1, cache.size())

            cache.put("key2", "value2")
            assertEquals(2, cache.size())

            cache.remove("key1")
            assertEquals(1, cache.size())
        }

    @Test
    fun `keys returns all cached keys`() =
        runTest {
            val cache = Cache<String, String>()

            cache.put("key1", "value1")
            cache.put("key2", "value2")

            val keys = cache.keys()

            assertEquals(2, keys.size)
            assertTrue(keys.contains("key1"))
            assertTrue(keys.contains("key2"))
        }

    @Test
    fun `getOrPut returns existing value`() =
        runTest {
            val cache = Cache<String, String>()

            cache.put("key", "existing")

            var computeCalled = false
            val value =
                cache.getOrPut("key") {
                    computeCalled = true
                    "computed"
                }

            assertEquals("existing", value)
            assertFalse(computeCalled, "Should not compute if value exists")
        }

    @Test
    fun `getOrPut computes and caches missing value`() =
        runTest {
            val cache = Cache<String, String>()

            val value =
                cache.getOrPut("key") {
                    "computed"
                }

            assertEquals("computed", value)
            assertEquals("computed", cache.get("key"))
        }

    @Test
    fun `values returns all cached values`() =
        runTest {
            val cache = Cache<String, Int>()

            cache.put("a", 1)
            cache.put("b", 2)
            cache.put("c", 3)

            val values = cache.values()

            assertEquals(3, values.size)
            assertTrue(values.contains(1))
            assertTrue(values.contains(2))
            assertTrue(values.contains(3))
        }
}
