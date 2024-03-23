def revealArgs(*args, **kwargs):
    print("args :", args)
    print("kwargs :", kwargs)

revealArgs(2, 5, "hello", club="real madrid", player="isaka yuichi")
# == Output ==
# args : (2, 5, 'hello')
# kwargs : {'club': 'real madrid', 'player': 'isaka yuichi'}
