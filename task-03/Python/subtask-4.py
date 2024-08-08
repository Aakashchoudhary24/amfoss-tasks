def asterik_diamond(n):
    
    string_output = ''
    
    if n <= 0 :
        print("Please enter a natural number")
    if n % 2 == 0 :
        for i in range(n):
            for j in range(n-i-1):
                string_output += ' '
            for k in range(i+1):
                string_output += ' * '
            string_output += '\n'
            
        for i in range(n-1):
            for j in range(i+1):
                string_output += ' '
            for k in range(n-i-1):
                string_output += ' * '
            string_output += '\n'
            
    else :
        t = n//2
        for i in range(t + 1):
            for j in range(t - i):
                string_output += '   '
            for k in range(2*i + 1):
                string_output += ' * '
            string_output += '\n'
        for i in range(t):
            for j in range(i+1):
                string_output += '   '
            for k in range(n - 2*i - 2):
                string_output += ' * '
            string_output += '\n'
            
    return string_output

def show_diamond():
    input = open('/home/aakash/amfoss-tasks/task-03/Python/diamondin.txt','r')
    data = input.read()
    n = int(data)
    input.close()
    
    output = open('/home/aakash/amfoss-tasks/task-03/Python/diamondout.txt','w')
    diamond = asterik_diamond(n)
    output.write(diamond)
    output.close()
show_diamond()



    