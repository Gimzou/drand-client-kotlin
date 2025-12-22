package love.drand.storage

import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlin.collections.plus
import kotlin.concurrent.Volatile

/**
 * Optimized cache implementation for read-heavy workloads.
 *
 * Uses optimistic reading with a mutex for writes only.
 * This allows concurrent reads without locking.
 *
 * Note: Read methods are NOT suspend and return snapshots.
 * Write methods ARE suspend and lock the cache.
 */
class SimpleCache<K, V> : Cache<K, V> {
    @Volatile
    private var storage = mapOf<K, V>()
    private val mutex = Mutex()

    override fun get(key: K): V? = storage[key]

    override suspend fun put(
        key: K,
        value: V,
    ) {
        mutex.withLock {
            storage = storage + (key to value)
        }
    }

    override suspend fun getOrPut(
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

    override fun contains(key: K): Boolean = storage.containsKey(key)

    override suspend fun remove(key: K): V? =
        mutex.withLock {
            val value = storage[key]
            storage = storage - key
            value
        }

    override suspend fun clear() {
        mutex.withLock {
            storage = emptyMap()
        }
    }

    override fun size(): Int = storage.size

    override fun keys(): Set<K> = storage.keys

    override fun values(): Collection<V> = storage.values

    override fun isEmpty(): Boolean = storage.isEmpty()
}
