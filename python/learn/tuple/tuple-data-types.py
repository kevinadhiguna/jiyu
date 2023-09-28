# A tuple is able to have any data types
boolean_tuple = (True, False, True, True)
string_tuple = ("jaguar", "toyota", "kia")
number_tuple = (541, 112, 928, 311)

print("boolean_tuple : {}".format(boolean_tuple)) # (True, False, True, True)
print("type of boolean_tuple : {}".format(type(boolean_tuple))) # <class 'tuple'>

print("string_tuple : {}".format(string_tuple)) # ('jaguar', 'toyota', 'kia')
print("type of string_tuple : {}".format(type(string_tuple))) # <class 'tuple'>

print("number_tuple : {}".format(number_tuple)) # (541, 112, 928, 311)
print("type of number_tuple : {}".format(type(number_tuple))) # <class 'tuple'>

# ----------------------------------------------------------------

# A tuple can contain multiple data types as well
multi_data_types_tuple = (True, "tesla", 1173)

print("multi_data_types_tuple : {}".format(multi_data_types_tuple)) # (True, 'tesla', 1173)
print("type of multi_data_types_tuple : {}".format(type(multi_data_types_tuple))) # <class 'tuple'>
