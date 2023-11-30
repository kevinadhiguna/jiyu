# A practical example of try-except

try:
  file = open("plain.txt")
  try:
    f.write("Hello, there!")
  except:
    print("Something went wrong while writing the file")
  # Close the file regardless of error or not:
  finally:
    file.close()
except:
  print("Something went wrong while opening the file")
