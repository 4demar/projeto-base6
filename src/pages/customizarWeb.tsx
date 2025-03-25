import { useState } from "react";

export default function CustomizarWeb() {
   const [headerStyle, setHeaderStyle] = useState({ bg: "bg-blue-500", text: "text-white", border: "border-black" });
   const [inputStyle, setInputStyle] = useState({ bg: "bg-white", text: "text-black", border: "border-gray-400" });
   const [buttonStyle, setButtonStyle] = useState({ bg: "bg-green-500", text: "text-white", border: "border-green-700" });
   const [cardStyle, setCardStyle] = useState({ bg: "bg-gray-200", text: "text-black", border: "border-gray-500" });
   const [sidebarStyle, setSidebarStyle] = useState({ bg: "bg-gray-800", text: "text-white", border: "border-gray-900" });

   return (
      <div className="flex h-screen">
         {/* Sidebar */}
         <div className={`w-64 p-4 ${sidebarStyle.bg} ${sidebarStyle.text} ${sidebarStyle.border} border-r`}>
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <ul>
               <li className="mb-2"><a href="#">Link 1</a></li>
               <li className="mb-2"><a href="#">Link 2</a></li>
               <li className="mb-2"><a href="#">Link 3</a></li>
            </ul>
         </div>

         <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className={`p-4 text-center text-xl font-bold ${headerStyle.bg} ${headerStyle.text} ${headerStyle.border} border-b`}>
               Customizable Web Interface
            </header>

            {/* Content */}
            <div className="p-6">
               {/* Label and Input */}
               <label className={`block mb-2 ${inputStyle.text}`}>Enter Text:</label>
               <input type="text" className={`p-2 w-64 ${inputStyle.bg} ${inputStyle.text} ${inputStyle.border} border rounded mb-4 block`} />

               {/* Button */}
               <button className={`p-2 ${buttonStyle.bg} ${buttonStyle.text} ${buttonStyle.border} border rounded mb-4`}>Click Me</button>

               {/* Card */}
               <div className={`p-4 w-64 ${cardStyle.bg} ${cardStyle.text} ${cardStyle.border} border rounded`}>
                  This is a card
               </div>
            </div>
         </div>
      </div>
   );
}
