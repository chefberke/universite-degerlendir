"use client";

import { createClient } from "@/utils/client";
import { TextArea, Select } from "@radix-ui/themes";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store";
import { fetchComment } from "@/lib/features/commentSlice";

function Submit() {
  const supabase = createClient();

  const path = usePathname();

  const pathLastIndex = path.lastIndexOf("/");
  const pathId = path.slice(pathLastIndex + 1);

  const [nowDate, setNowDate] = useState(new Date().toLocaleString());
  const [comment, setComment] = useState("");
  const [selectedValue, setSelectedValue] = useState("5");
  const [userEmail, setUserEmail] = useState<String | null | undefined>();
  const [isFormValid, setIsFormValid] = useState(false);

  async function userInfo() {
    const { data: user, error } = await supabase.auth.getUser();

    if (error) {
      console.log("User fetch error");
    }

    if (user && user?.user) {
      setUserEmail(user?.user?.email);
    }
  }

  useEffect(() => {
    userInfo();
  }, []);

  useEffect(() => {
    setIsFormValid(comment.trim() !== "" && selectedValue !== "");
  }, [comment, selectedValue]);

  const notify = () => toast("Yorumunuz başarıyla paylaşıldı!");

  const dispatch = useDispatch<AppDispatch>();

  async function commentInsert(e: any) {
    e.preventDefault();
    if (!isFormValid) return;

    const request = {
      user_email: userEmail,
      university_id: pathId,
      comment: comment,
      created_at: nowDate,
      rate: selectedValue,
    };

    const { error } = await supabase.from("comment").insert(request);

    if (error) {
      console.log("İnsert Error", error);
      return;
    }

    notify();
    dispatch(fetchComment(pathId));

    setComment("");
    setSelectedValue("5");
  }

  return (
    <div className="flex items-center justify-start w-full">
      <Toaster />
      <div className="flex-col items-center justify-start w-full">
        <div>
          <h2 className="font-medium text-[1.4rem]">Yorum Yap!</h2>
        </div>
        <form>
          <div className="pt-4">
            <TextArea
              required
              size="3"
              className="h-[6rem]"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Yorum ve düşüncelerini paylaşmayı unutma!"
            />
          </div>
          <div className="pt-4">
            <Select.Root defaultValue={selectedValue} onValueChange={(value: any) => setSelectedValue(value)} required>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Item value="5">
                    <p className="flex items-center gap-2 font-semibold">
                      <FaStar className="text-green-600 text-[1.2rem]" /> 5
                    </p>
                  </Select.Item>
                  <Select.Item value="4">
                    <p className="flex items-center gap-2 font-semibold">
                      <FaStar className="text-green-500 text-[1.2rem]" /> 4
                    </p>
                  </Select.Item>
                  <Select.Item value="3">
                    <p className="flex items-center gap-2 font-semibold">
                      <FaStar className="text-yellow-500 text-[1.2rem]" /> 3
                    </p>
                  </Select.Item>
                  <Select.Item value="2">
                    <p className="flex items-center gap-2 font-semibold">
                      <FaStar className="text-orange-500 text-[1.2rem]" /> 2
                    </p>
                  </Select.Item>
                  <Select.Item value="1">
                    <p className="flex items-center gap-2 font-semibold">
                      <FaStar className="text-red-500 text-[1.2rem]" /> 1
                    </p>
                  </Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
          <div className="pt-2 flex items-end justify-end w-full">
            <button
              onClick={(e: any) => commentInsert(e)}
              className={`bg-blue-600 text-white rounded px-6 h-[2rem] hover:opacity-95 ${
                !isFormValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isFormValid}
            >
              Paylaş
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Submit;
