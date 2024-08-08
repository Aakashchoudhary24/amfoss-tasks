def asterik_diamond():
    # for even number inputs
    n = int(input("Enter the width of biggest row : "))
    
    if n <= 0 :
        print("Please enter a natural number")
    if n % 2 == 0 :
        for i in range(n):
            for j in range(n-i-1):
                print(' ', end= ' ')
            for k in range(i+1):
                print(' * ', end=' ')
            print()
            
        for i in range(n-1):
            for j in range(i+1):
                print(' ', end = ' ')
            for k in range(n-i-1):
                print(' * ', end = ' ')
            print()
            
    else :
        t = n//2
        for i in range(t + 1):
            for j in range(t - i):
                print('   ', end = '')
            for k in range(2*i + 1):
                print(' * ', end = '')
            print()
        for i in range(t):
            for j in range(i+1):
                print('   ', end = '')
            for k in range(n - 2*i - 2):
                print(' * ', end = '')
            print()
asterik_diamond()