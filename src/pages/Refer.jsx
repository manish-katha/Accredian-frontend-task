import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../index";

export const ReferralPage = () => {
  const [sender_name, setsender_name] = useState("");
  const [sender_email, setsender_email] = useState("");
  const [sender_phone, setsender_phone] = useState("");
  const [receiver_name, setreceiver_name] = useState("");
  const [receiver_email, setreceiver_email] = useState("");
  const [receiver_phone, setreceiver_phone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log("success 1");
      const { data } = await axios.post(
        `${server}/tasks/new`,
        {
          sender_name,
          sender_email,
          sender_phone,
          receiver_name,
          receiver_email,
          receiver_phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("success 2");
      alert("Referred successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Referred fail");
      navigate("/login");
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:max-w-md">
          <Link to="/" className="self-end mt-4 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Refer a Friend
          </h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="sender-name"
                className="block text-sm font-medium text-gray-700"
              >
                Sender's Name
              </label>
              <input
                id="sender-name"
                name="sender-name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Sender's Name"
                onChange={(e) => setsender_name(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="sender-email"
                className="block text-sm font-medium text-gray-700"
              >
                Sender's Email address
              </label>
              <input
                id="sender-email"
                name="sender-email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Sender's Email address"
                onChange={(e) => setsender_email(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="sender-phone"
                className="block text-sm font-medium text-gray-700"
              >
                Sender's Phone number
              </label>
              <input
                id="sender-phone"
                name="sender-phone"
                type="tel"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Sender's Phone number"
                onChange={(e) => setsender_phone(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <label
                htmlFor="receiver-name"
                className="block text-sm font-medium text-gray-700"
              >
                Receiver's Name
              </label>
              <input
                id="receiver-name"
                name="receiver-name"
                type="text"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Receiver's Name"
                onChange={(e) => setreceiver_name(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="receiver-email"
                className="block text-sm font-medium text-gray-700"
              >
                Receiver's Email address
              </label>
              <input
                id="receiver-email"
                name="receiver-email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Receiver's Email address"
                onChange={(e) => setreceiver_email(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="receiver-phone"
                className="block text-sm font-medium text-gray-700"
              >
                Receiver's Phone number
              </label>
              <input
                id="receiver-phone"
                name="receiver-phone"
                type="tel"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Receiver's Phone number"
                onChange={(e) => setreceiver_phone(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="mt-6 w-full bg-purple-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Send Referral
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
