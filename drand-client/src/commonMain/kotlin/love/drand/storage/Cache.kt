package love.drand.storage

import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlin.concurrent.Volatile

/**
 * Optimized cache for read-heavy workloads.
 *
 * Uses optimistic reading with a mutex for writes only.
 * This allows concurrent reads without locking.
 *
 * Note: Read methods are NOT suspend and return snapshots.
 * Write methods ARE suspend and lock the cache.
 */
class Cache<K, V> {
    @Volatile
    private var storage = mapOf<K, V>()
    private val mutex = Mutex()

    /**
     * Get a value from the cache.
     *
     * Non-suspending - returns a snapshot of the cache.
     */
    fun get(key: K): V? = storage[key]

    /**
     * Store a value in the cache.
     *
     * Suspending - locks for write.
     */
    suspend fun put(
        key: K,
        value: V,
    ) {
        mutex.withLock {
            storage = storage + (key to value)
        }
    }

    /**
     * Get a value or compute and cache it if missing.
     */
    suspend fun getOrPut(
        key: K,
        defaultValue: suspend () -> V,
    ): V {
        // Optimistic read
        storage[key]?.let { return it }

        // Not found, need to compute and store
        mutex.withLock {
            // Double-check after acquiring lock
            storage[key]?.let { return it }

            val value = defaultValue()
            storage = storage + (key to value)
            return value
        }
    }

    /**
     * Check if a key exists in the cache.
     */
    fun contains(key: K): Boolean = storage.containsKey(key)

    /**
     * Remove a value from the cache.
     */
    suspend fun remove(key: K): V? =
        mutex.withLock {
            val value = storage[key]
            storage = storage - key
            value
        }

    /**
     * Clear all entries from the cache.
     */
    suspend fun clear() {
        mutex.withLock {
            storage = emptyMap()
        }
    }

    /**
     * Get the number of cached entries.
     */
    fun size(): Int = storage.size

    /**
     * Get all keys in the cache.
     */
    fun keys(): Set<K> = storage.keys

    /**
     * Get all values in the cache.
     */
    fun values(): Collection<V> = storage.values

    /**
     * Check if cache is empty
     */
    fun isEmpty(): Boolean = storage.isEmpty()
}
