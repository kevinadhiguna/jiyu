class Customer:
  # '__init__' is like a constructor in JavaScript
  def __init__(self, name, membership_type):
    self.name = name
    self.membership_type = membership_type

# Create objects from the Customer class
customer = Customer('Jack', 'Gold')
customer2 = Customer('Kate', 'Silver')
print('customer.name : ', customer.name) # Jack
print('customer.membership_type : ', customer.membership_type) # Gold
print('customer2.name : ', customer2.name) # Kate
print('customer2.membership_type : ', customer2.membership_type) # Silver
print('type of customer variable : ', type(customer)) # <class '__main__.Customer'>
