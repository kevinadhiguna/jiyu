class Customer:
  # '__init__' is like a constructor in JavaScript
  def __init__(self, name, membership_type):
    self.name = name
    self.membership_type = membership_type

  def update_membership(self, new_membership_type):
    # One can do something such as cost calculation, invoke API calls, etc. here
    self.membership_type = new_membership_type

  # Convert a customer to a string (without this, 'print(customer)' would give memory address instead of the actual data)
  def __str__(self):
    return self.name + ' ' + self.membership_type

  def print_all_customers(customers):
    for customer in customers:
      print(customer)

  # Compare two objects by their values
  def __eq__(self, other):
    if self.name == other.name and self.membership_type == other.membership_type:
      return True
    
    return False
  
  # Notice 'self' is not in the below function's parameter. Thus, this is called a static method
  # A static method is a method that is not attached to any individual object but instead is invoked to a class itself
  def read_customer():
    print('Reading customer')

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

# Invoke a static method
#customer.read_customer() # TypeError: Customer.read_customer() takes 0 positional arguments but 1 was given
Customer.read_customer() # Reading customer

# Without 'def __str__()' method :
#print(anotherCustomer[0]) # <__main__.Customer object at 0x7f2da9c2bd90>
# With 'def __str__()' method :
print('anotherCustomer[0] : ', anotherCustomer[0]) # Evgeny Silver

Customer.print_all_customers(anotherCustomer)

otherCustomer = Customer('Selena', 'Bronze')
# Code below returns True since comaparison function 'def __eq__' exists. Otherwise, it will compare memory instead of actual data.
print('anotherCustomer[1] == otherCustomer ? ', anotherCustomer[1] == otherCustomer) # True
