import { useState } from "react";

const FindUniqueIntegers = () => {
    const [input, setInput] = useState("");
    const [arrays, setArrays] = useState([]);
    const [uniqueIntegers, setUniqueIntegers] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleFindUniqueIntegers = () => {
        try {
            const parsedArrays = JSON.parse(input);

            if (!Array.isArray(parsedArrays) || !parsedArrays.every(arr => Array.isArray(arr))) {
                alert("Please enter a valid JSON array of arrays (e.g., [[1, 2], [2, 3], [4]])");
                return;
            }

            setArrays(parsedArrays);

            const allIntegers = parsedArrays.flat();

            const countMap = new Map();
            allIntegers.forEach(num => {
                countMap.set(num, (countMap.get(num) || 0) + 1);
            });

            const unique = [];
            countMap.forEach((count, num) => {
                if (count === 1) {
                    unique.push(num);
                }
            });

            setUniqueIntegers(unique);
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Find Unique Integers
                </h1>
                <textarea
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter arrays in JSON format (e.g., [[1, 2, 3], [2, 3, 4], [3, 4, 5]])"
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                    onClick={handleFindUniqueIntegers}
                    className="w-full bg-blue-500 text-white font-semibold py-2 mt-4 rounded-lg hover:bg-blue-600 transition"
                >
                    Find Unique Integers
                </button>
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-gray-700">Input Arrays</h2>
                    <p className="bg-gray-100 p-3 rounded-lg border text-gray-600">
                        {JSON.stringify(arrays, null, 2)}
                    </p>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-700">Unique Integers</h2>
                    <p className="bg-gray-100 p-3 rounded-lg border text-gray-600">
                        {JSON.stringify(uniqueIntegers, null, 2)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FindUniqueIntegers;
