package love.drand.storage

/**
 * Interface for cache implementations.
 *
 * Defines the contract for caching key-value pairs with thread-safe operations.
 */
interface Cache<K, V> {
    /**
     * Get a value from the cache.
     *
     * Non-suspending - returns a snapshot of the cache.
     */
    fun get(key: K): V?

    /**
     * Store a value in the cache.
     *
     * Suspending - may lock for write.
     */
    suspend fun put(
        key: K,
        value: V,
    )

    /**
     * Get a value or compute and cache it if missing.
     */
    suspend fun getOrPut(
        key: K,
        defaultValue: suspend () -> V,
    ): V

    /**
     * Check if a key exists in the cache.
     */
    fun contains(key: K): Boolean

    /**
     * Remove a value from the cache.
     */
    suspend fun remove(key: K): V?

    /**
     * Clear all entries from the cache.
     */
    suspend fun clear()

    /**
     * Get the number of cached entries.
     */
    fun size(): Int

    /**
     * Get all keys in the cache.
     */
    fun keys(): Set<K>

    /**
     * Get all values in the cache.
     */
    fun values(): Collection<V>

    /**
     * Check if cache is empty
     */
    fun isEmpty(): Boolean
}
