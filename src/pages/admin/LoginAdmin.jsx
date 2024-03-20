import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { toast } from "react-toastify";
import images from "../../assets/images";

function LoginAdmin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [dataLogin, setDataLogin] = useState({
    email: '',
    password: ''
  })
  const [validasiError, setValidasiError] = useState(false);
  const [passError, setPassError] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    console.log('DATA LOGIN', JSON.stringify(dataLogin, null, 2))
    validasi();
  }, [dataLogin]);

  const validasi = () => {
    const dataLoginAllFilled = Object.values(dataLogin).every(value => value !== '')
    if (!dataLoginAllFilled) {
      // toast.error("Email atau Password tidak boleh kosong!", {
      //   position: "top-right",
      //   theme: "colored",
      //   hideProgressBar: true,
      //   autoClose: 1000,
      // });
      setValidasiError(true);
    } else {
      // toast.success("Berhasil Login!", {
      //   position: "top-right",
      //   theme: "colored",
      //   hideProgressBar: true,
      //   autoClose: 1000,
      // });
      setValidasiError(false);
    }
  };

  return (
    <div className="h-[800px] lg:h-[665px] relative">
      <img className="object-cover w-full h-full" src={images.jenia} alt="" />
      <div className="absolute h-full top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center">
        <div className="bg-[#111827] px-10 py-8 mt-20 w-[380px] rounded-lg text-center relative lg:w-[450px] lg:-mt-20">
          <h3 className="text-2xl font-bold mt-3 text-white">Sign In</h3>
          <div className="flex flex-col w-full h-[200px] mt-8">
            <Input
              type="email"
              label="Email"
              labelPlacement="inside"
              color="default"
              required
              className="text-left"
              onChange={(e) => {
                setDataLogin(prev => ({
                  ...prev,
                  email: e.target.value
                }))
                // validasi()
              }}
            />
            <Input
              type="password"
              label="Password"
              labelPlacement="inside"
              color="default"
              required
              className="text-left mt-4"
              onChange={(e) => {
                setDataLogin(prev => ({
                  ...prev,
                  password: e.target.value
                }))
              }}
            />
            {validasiError && (
              <p className="text-red-500 text-[12px] text-right">
                Email atau password tidak boleh kosong
              </p>
            )}
            <Button
              disabled={validasiError}
              color={validasiError ? 'default' : 'warning'}
              className="mt-4"
              onClick={
                () => {
                    toast.success("Berhasil Login!", {
                      position: "top-right",
                      theme: "colored",
                      hideProgressBar: true,
                      autoClose: 1000,
                    })
                    navigate('/home')

                }
                // console.log('email', email)
              }
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginAdmin;
