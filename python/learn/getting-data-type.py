var_string = "Sweeper"
print("type of", var_string, ": ", type(var_string)) # <class 'str'>

var_int = 100
print("type of", var_int, ": ", type(var_int)) # <class 'int'>

var_float = 600.5
print("type of", var_float, ": ", type(var_float)) # <class 'float'>

var_complex = 9j # <- followed with a "j" as the imaginary part:
print("type of", var_complex, ": ", type(var_complex)) # <class 'complex'>

var_list = ["Shohei", "Mike", "Anthony"]
print("type of", var_list, ": ", type(var_list)) # <class 'list'>

var_tuple = ("Mookie", "Freddie", "James")
print("type of", var_tuple, ": ", type(var_tuple)) # <class 'tuple'>

var_range = range(7)
print("type of", var_range, ": ", type(var_range)) # <class 'range'>

var_dict = {"name": "Hunter", "age": 25}
print("type of", var_dict, ": ", type(var_dict)) # <class 'dict'>

var_set = {"bryce", "zack", "kyle"}
print("type of", var_set, ": ", type(var_set)) # <class 'set'>

var_frozenset = frozenset({"Max", "Justin", "David"})
print("type of", var_frozenset, ": ", type(var_frozenset)) # <class 'frozenset'>

var_bool = True # <- must start in uppercase
print("type of", var_bool, ": ", type(var_bool)) # <class 'bool'>

var_bytes = b"Umpire" # <- must start with 'b'
print("type of", var_bytes, ": ", type(var_bytes)) # <class 'bytes'>

var_bytearray = bytearray(3)
print("type of", var_bytearray, ": ", type(var_bytearray)) # <class 'bytearray'>

var_memoryview = memoryview(bytes(3))
print("type of", var_memoryview, ": ", type(var_memoryview)) # <class 'memoryview'>

var_NoneType = None
print("type of", var_NoneType, ": ", type(var_NoneType)) # <class 'NoneType'>
