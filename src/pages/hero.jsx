import { Announcement } from "./anouncement";
import { Navbar } from "./navbar";
import React from "react";

export const Hero = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <div className="w-4/6 rounded-md bg-blue-100 flex items-center justify-center px-3 relative">
          <div className="w-3/6">
            <img
              className="h-24 absolute rotate-90 top-0 left-0"
              src="https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UDjl0f7GDXPI6HyNHOMxQdY~5~1m81FusuTeeAz~W-CDF7lakVguaR02u-VQTSZIPD2TDdB4fSa-ZG3DKbJyEsxbgsWKiz~LiucdvfWw4nad7F~tSYyfnzL6Ug3IlCUahXO526p0AatPecrSo4ZXL4h3IiW9faNh7yhIUlrnZg~qkXuA2vfM6HJ2TXJw1jq32wYo~X0sRpkg339G~3HAZ~1jf-y3DDWXj2RwYF-bM7cFkJj39fiVwpBRigI2UUBvisipK-pGlsXbtSegyvakBYEHIEi4nf-98A4VAoZ9iga7n1257-kxPj0nGtjEZS6x-QpStVW7O2Qnw3OmzRK0MA__"
              alt="Small image"
            />
            <div className="m-6 p-8 ">
              <div className="text-6xl font-semibold  ">
                Let's Learn <br />& Earn
              </div>
              <div className="text-2xl mt-4">
                Get a chance to <br /> win upto
                <span className="font-bold text-3xl p-1 text-blue-600">
                  Rs. 15,000
                </span>
              </div>
            </div>
            <button className="items-center mx-12 justify-center text-white bg-blue-500 h-10 w-32 rounded-md">
              <a href="/refer">Refer Now</a>
            </button>
          </div>
          <div className="w-3/6 relative">
            <img
              className="object-cover w-full h-full"
              src="https://s3-alpha-sig.figma.com/img/6da5/530f/c90be82b93f2066608be1f96ef347467?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hIbh0cHW8rTmM860DX4~6Bf0tZgFlRVDcCJq1vgRkfZfjvUJ0~6ox9wYsO-qQ9R7CdUzK~09lhsg8-vQzN1MZ7xNYA-MtvlsOoJLC9xm6~YRIq2E4X5HYwvPC4tQw8dRdgAevuI0sSzUE6H-3uuZdu4ioHUI~qWqzoEyE8qvwkCKbal02~7fpDpgVreiA9xhSNAhP4Pi9VGj3tOHn7cPsCdYUsJufpLnQK7zf9Bhe~ZxOlekRM2QdociYG4bgLpe6U6RZFR6ImpQ8PQzww8j-m69ytI1zeA9PQdhXEXOSw5L2iLP6UMD8hV9uEB7ODNsuESyTo59t17DJFLkThXFKA__"
              alt="Hero image"
            />
            <img
              className="absolute top-72 -rotate-90 left-0 h-24 ml-2 mt-2"
              src="https://s3-alpha-sig.figma.com/img/fb39/0c4b/10470aa903b54e8e9e856c5046a0fc6f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UDjl0f7GDXPI6HyNHOMxQdY~5~1m81FusuTeeAz~W-CDF7lakVguaR02u-VQTSZIPD2TDdB4fSa-ZG3DKbJyEsxbgsWKiz~LiucdvfWw4nad7F~tSYyfnzL6Ug3IlCUahXO526p0AatPecrSo4ZXL4h3IiW9faNh7yhIUlrnZg~qkXuA2vfM6HJ2TXJw1jq32wYo~X0sRpkg339G~3HAZ~1jf-y3DDWXj2RwYF-bM7cFkJj39fiVwpBRigI2UUBvisipK-pGlsXbtSegyvakBYEHIEi4nf-98A4VAoZ9iga7n1257-kxPj0nGtjEZS6x-QpStVW7O2Qnw3OmzRK0MA__"
              alt="money image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
