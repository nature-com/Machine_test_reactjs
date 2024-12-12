import { useNavigate } from "react-router-dom";
import FindUniqueIntegers from "../../Function/Function";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }

    return (
        <>
            <div>
                <FindUniqueIntegers />
            </div>
            <button onClick={handleLogout}
                className="mt-2 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200">
                Logout
            </button>

        </>
    )
}

export default Dashboard;