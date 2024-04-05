# == Background problem ==
def add(a, b, c):
    return a + b + c

print("add(10, 20, 30) :", add(10, 20, 30))
# print("add(10, 20, 30, 40, 50) :", add(10, 20, 30, 40, 50)) # <- TypeError: add() takes 3 positional arguments but 5 were given

# ========================

# == Solution ==
def add2(*args):
    total = 0
    for arg in args:
        total = total + arg
    return total

print("add2(10, 20, 30, 40, 50) :", add2(10, 20, 30, 40, 50)) # 150

# ==============

def example(*args, **kwargs):
    print("args :", args)
    print("kwargs :", kwargs)

print("example(10, 20, 30, 40, 50) :", example(10, 20, 30, 40, 50))
# Output:
# args : (10, 20, 30, 40, 50)
# kwargs : {}
# example(10, 20, 30, 40, 50) : None

# ===================================

def exampletwo(*args, **kwargs):
    pass

print("exampletwo() :", exampletwo()) # None
