use std::fs;
use std::io::Write;

fn asterisk_diamond(n: i32) -> String {
    let mut string_output = String::new();
    
    if n <= 0 {
        return String::from("Please enter a natural number");
    }
    
    if n % 2 == 0 {
        for i in 0..n {
            for _ in 0..(n-i-1) {
                string_output.push('  ');
            }
            for _ in 0..(i+1) {
                string_output.push_str(" * ");
            }
            string_output.push('\n');
        }
        
        for i in 0..(n-1) {
            for _ in 0..(i+1) {
                string_output.push('  ');
            }
            for _ in 0..(n-i-1) {
                string_output.push_str(" * ");
            }
            string_output.push('\n');
        }
    } else {
        let t = n / 2;
        for i in 0..(t + 1) {
            for _ in 0..(t - i) {
                string_output.push_str("   ");
            }
            for _ in 0..(2*i + 1) {
                string_output.push_str(" * ");
            }
            string_output.push('\n');
        }
        for i in 0..t {
            for _ in 0..(i+1) {
                string_output.push_str("   ");
            }
            for _ in 0..(n - 2*i - 2) {
                string_output.push_str(" * ");
            }
            string_output.push('\n');
        }
    }
    
    string_output
}

fn show_diamond() -> std::io::Result<()> {
    let input_path = "/home/aakash/amfoss-tasks/task-03/Rust/input.txt";
    let output_path = "/home/aakash/amfoss-tasks/task-03/Rust/output.txt";

    let data = fs::read_to_string(input_path)?;
    let n: i32 = data.trim().parse().expect("Failed to parse input as integer");

    let diamond = asterisk_diamond(n);

    fs::write(output_path, diamond)?;

    Ok(())
}

fn main() {
    if let Err(e) = show_diamond() {
        eprintln!("Error: {}", e);
    }
}