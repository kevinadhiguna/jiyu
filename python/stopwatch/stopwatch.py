import time

def stopwatch():
    input("Press 'Enter' or 'return' to start the stopwatch...")
    start_time = time.time()
    print("-- Stopwatch started --\n")

    input("Press 'Enter' or 'return' to stop the stopwatch...")
    end_time = time.time()
    print("-- Stopwatch stopped --\n")

    elapsed_time = end_time - start_time
    print(f"Elapsed time: {elapsed_time:.2f} seconds")

stopwatch()

# Output:
# Press 'Enter' or 'return' to start the stopwatch...
# -- Stopwatch started --
# 
# Press 'Enter' or 'return' to stop the stopwatch...
# -- Stopwatch stopped --
# 
# Elapsed time: 3.95 seconds
