class Customer:
  # '__init__' is like a constructor in JavaScript
  def __init__(self, name, membership_type):
    self.name = name
    self.membership_type = membership_type

  def update_membership(self, new_membership_type):
    # One can do something such as cost calculation, invoke API calls, etc. here
    self.membership_type = new_membership_type

# Create objects from the Customer class
customer = Customer('Jack', 'Gold')
customer2 = Customer('Kate', 'Silver')
print('customer.name : ', customer.name) # Jack
print('customer.membership_type : ', customer.membership_type) # Gold
print('customer2.name : ', customer2.name) # Kate
print('customer2.membership_type : ', customer2.membership_type) # Silver
print('type of customer variable : ', type(customer)) # <class '__main__.Customer'>

# Another way to create objects in one line
anotherCustomer = [Customer('Evgeny', 'Silver'), Customer('Selena', 'Bronze')]
print('first anotherCustomer name : ', anotherCustomer[0].name) # Evgeny
print('first anotherCustomer membership_type : ', anotherCustomer[0].membership_type) # Silver
print('second anotherCustomer name : ', anotherCustomer[1].name) # Selena
print('second anotherCustomer membership_type : ', anotherCustomer[1].membership_type) # Bronze
print('type of anotherCustomer variable : ', type(anotherCustomer)) # <class 'list'>

# Update customer2's membership type
customer2.update_membership('Gold')
print('customer2.membership_type : ', customer2.membership_type) # Gold
