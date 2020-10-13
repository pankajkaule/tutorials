# MAP

map is generally used for storing key value pair.
map have unique key.
map is useful for delete update element on the basis of key.

## JAVA MAP HIERARCHY

1. hashmap
2. linkedhashmap
3. treemap

| class         | Description                                                                       |
| ------------- | --------------------------------------------------------------------------------- |
| Hashmap       | hashmap is the implementation of the map. but it doesn't' have any order          |
| LinkedHashMap | LinkedHashMap is the implementation of the map. it maintain insertion order.      |
| TreeMap       | TreeMap is the implementation of Map and SortedMap. It maintains ascending order. |

### USEFUL METHODS FOR MAP INTERFACE

| METHOD         | Description                                                                       |
| ------------- | --------------------------------------------------------------------------------- |
| V put(Object key, Object value)    | It is used to insert an entry in the map.  |
| void putAll(Map map)   | It is used to insert the specified map in the map.  |
| V putIfAbsent(K key, V value)  | It inserts the specified value with the specified key in the map only if it is not already specified.  |
| V remove(Object key)  | It is used to delete an entry for the specified key.|
| boolean remove(Object key, Object value) | It removes the specified values with the associated specified keys from the map.|
| Set keySet()  |It returns the Set view containing all the keys.|
| Set<Map.Entry<K,V>> entrySet() | It returns the Set view containing all the keys and values.|
| void clear()| It is used to reset the map.|
|V compute(K key, BiFunction<? super K,? super V,? extends V> remappingFunction) | t is used to compute a mapping for the specified key and its current mapped value (or null if there is no current mapping).|
|V computeIfAbsent(K key, Function<? super K,? extends V> mappingFunction)|It is used to compute its value using the given mapping function, if the specified key is not already associated with a value (or is mapped to null), and enters it into this map unless null.|
|V computeIfPresent(K key, BiFunction<? super K,? super V,? extends V> remappingFunction)|It is used to compute a new mapping given the key and its current mapped value if the value for the specified key is present and non-null.
|boolean containsValue(Object value)|This method returns true if some value equal to the value exists within the map, else return false.|
|boolean containsKey(Object key)|This method returns true if some key equal to the key exists within the map, else return false.|
|boolean equals(Object o)|It is used to compare the specified Object with the Map.|

[for more visit javatpoint](https://www.javatpoint.com/java-map)
