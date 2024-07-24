function frequencySort(nums) {
    // Count the frequency of each element
    const freqMap = new Map();
    nums.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });

    // Sort based on frequency first (increasing), then by value (decreasing)
    return nums.sort((a, b) => {
        const freqA = freqMap.get(a);
        const freqB = freqMap.get(b);
        if (freqA === freqB) {
            return b - a; // Sort by value in decreasing order
        }
        return freqA - freqB; // Sort by frequency in increasing order
    });
}

// Example usage
const nums = [1,1,2,2,2,3];
console.log(frequencySort(nums));  // Output: [3, 1, 1, 2, 2, 2]