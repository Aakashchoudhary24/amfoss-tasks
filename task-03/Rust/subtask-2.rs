use std::fs;
use std::io::Write;

fn file_read_and_write() -> std::io::Result<()> {
    let input_path = "/home/aakash/amfoss-tasks/task-03/Rust/input.txt";
    let output_path = "/home/aakash/amfoss-tasks/task-03/Rust/output.txt";

    let data = fs::read_to_string(input_path)?;

    fs::write(output_path, data)?;

    Ok(())
}

fn main() {
    if let Err(e) = file_read_and_write() {
        eprintln!("Error: {}", e);
    }
}