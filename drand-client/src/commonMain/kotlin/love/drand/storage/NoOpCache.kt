package love.drand.storage

/**
 * A no-op cache that doesn't store anything.
 * Useful for disabling caching when needed.
 */
class NoOpCache<K, V> : Cache<K, V> {
    override fun get(key: K): V? = null

    override suspend fun put(
        key: K,
        value: V,
    ) {
        // No-op
    }

    override suspend fun getOrPut(
        key: K,
        defaultValue: suspend () -> V,
    ): V = defaultValue()

    override fun contains(key: K): Boolean = false

    override suspend fun remove(key: K): V? = null

    override suspend fun clear() {
        // No-op
    }

    override fun size(): Int = 0

    override fun keys(): Set<K> = emptySet()

    override fun values(): Collection<V> = emptyList()

    override fun isEmpty(): Boolean = true
}
