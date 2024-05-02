st = set('abc')
st.add('def')

print("st :", st) # {'a', 'def', 'b', 'c'}

st.update(set(['p', 'q']))

print("st :", st) # {'p', 'q', 'a', 'def', 'c', 'b'}
