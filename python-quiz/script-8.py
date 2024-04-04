def modifyArr(array):
    array[0] = ['xyz']
    array[1] = ['ijk']
    print("array :", array)
    return id(array)

record = ['ijk', 'xyz']
print("record:", record)

print("id(record) == modifyArr(record) ? ", id(record) == modifyArr(record)) # True

# The output is True because same objects are evaluated
