def file_read_and_write():
    file_one = open("/home/aakash/amfoss-tasks/task-03/Python/input.txt", "r")
    data = file_one.read()
    file_one.close()
    
    file_two = open("/home/aakash/amfoss-tasks/task-03/Python/output.txt","w")
    file_two.write(data)
    
    file_two.close()
file_read_and_write()


