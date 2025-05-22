import random
import string
import argparse

def generate_password(length=12):
    chars = string.ascii_letters + string.digits + "!@#$%^&*"
    return ''.join(random.choice(chars) for _ in range(length))

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--length", type=int, default=12)
    args = parser.parse_args()
    print(f"Generated Password: {generate_password(args.length)}")
