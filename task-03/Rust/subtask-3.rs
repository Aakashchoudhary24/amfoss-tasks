use std::io;

fn asterisk_diamond() {
    println!("Enter the width of biggest row:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let n: i32 = input.trim().parse().expect("Please enter a valid number");

    if n <= 0 {
        println!("Please enter a natural number");
        return;
    }

    if n % 2 == 0 {
        for i in 0..n {
            for _ in 0..(n-i-1) {
                print!(" ");
            }
            for _ in 0..(i+1) {
                print!("* ");
            }
            println!();
        }
        for i in 0..(n-1) {
            for _ in 0..(i+1) {
                print!(" ");
            }
            for _ in 0..(n-i-1) {
                print!("* ");
            }
            println!();
        }
    } else {
        let t = n / 2;
        for i in 0..(t+1) {
            for _ in 0..(t-i) {
                print!("   ");
            }
            for _ in 0..(2*i+1) {
                print!(" * ");
            }
            println!();
        }
        for i in 0..t {
            for _ in 0..(i+1) {
                print!("   ");
            }
            for _ in 0..(n-2*i-2) {
                print!(" * ");
            }
            println!();
        }
    }
}

fn main() {
    asterisk_diamond();
}