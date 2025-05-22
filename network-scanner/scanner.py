import os
import platform

def scan_network():
    if platform.system() == "Windows":
        os.system("arp -a")
    else:
        os.system("arp-scan -l")

if __name__ == "__main__":
    scan_network()
