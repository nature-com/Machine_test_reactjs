import { useState } from "react";

const FindUniqueIntegers = () => {
    const [input, setInput] = useState("");
    const [arrays, setArrays] = useState([]);
    const [uniqueIntegers, setUniqueIntegers] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleUniqueIntegers = () => {
        try {
            const parsedArrays = JSON.parse(input);

            if (!Array.isArray(parsedArrays) || !parsedArrays.every(Array.isArray)) {
                alert("Please enter a valid JSON array of arrays (e.g., [[1, 2], [2, 3], [4]])");
                return;
            }

            setArrays(parsedArrays);

            const countMap = parsedArrays.flat().reduce((map, num) => {
                map[num] = (map[num] || 0) + 1;
                return map;
            }, {});

            const unique = Object.keys(countMap)
                .filter((num) => countMap[num] === 1)
                .map(Number);

            setUniqueIntegers(unique);
        } catch (error) {
            console.error(error);
            alert("Invalid input. Please ensure the format is correct.");
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
                    onClick={handleUniqueIntegers}
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
