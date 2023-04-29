#include <iostream>

int calculateGrade(float* grades) {
    return ((grades[0] / 100 * 0.06) + (grades[1] / 100 * 0.07) + (grades[2] / 50 * 0.07) + 
            (grades[3] / 30 * 0.15) + (grades[4] / 65 * 0.15)) * 50;
}

int main() {
    float grades[5];
    std::cout << "Enter Assignment 1 grade (out of 100): ";
    std::cin >> grades[0];
    std::cout << "Enter Assignment 2 grade (out of 100): ";
    std::cin >> grades[1];
    std::cout << "Enter Assignment 3 grade (out of 50): ";
    std::cin >> grades[2];
    std::cout << "Enter Coursework 1 grade (out of 30): ";
    std::cin >> grades[3];
    std::cout << "Enter Coursework 2 grade (out of 65): ";
    std::cin >> grades[4];

    std::cout << "The final grade is: " << calculateGrade(grades) << std::endl;
    return 0;
}
