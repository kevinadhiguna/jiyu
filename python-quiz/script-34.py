# Python - Dictionary

dictionary1 = {
    "country": {
        "usa": {
            "state": {
                "newyork": {
                    "city": {
                        "manhattan": 11,
                        "itaca": 543,
                        # "newyork" # <- Error (there must be a value)
                    }
                }
            }
        }
    }
}

print(dictionary1['country']['usa']['state']['newyork']['city']) # {'manhattan': 11, 'itaca': 543}
print(dictionary1['country']['usa']['state']['newyork']['city']['manhattan']) # 11
print(dictionary1['country']['usa']['state']['newyork']['city']['itaca']) # 543
# print(dictionary1['country']['usa']['state']['newyork']['city']['newyork']) # <- Error (a value is expected)
