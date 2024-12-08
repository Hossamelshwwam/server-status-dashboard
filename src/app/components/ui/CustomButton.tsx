"use client";
import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
interface Props {
  title: string | React.ReactNode;
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  link?: string;
  className?: string;
  disabled?: boolean;
  arrow?: boolean;
  type?: "button" | "reset" | "submit";
}

const CustomButton = ({
  title,
  colorOne,
  colorTwo,
  colorThree,
  link,
  className,
  disabled,
  type = "submit",
  arrow = true,
}: Props) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = useCallback(() => {
    setIsHover(true);
  }, []);
  const handleLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  const route = useRouter();

  return (
    <motion.button
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      type={type}
      disabled={disabled}
      onClick={link ? () => route.push(`/${link}`) : undefined}
      className={`${className} px-5 py-2 flex justify-center items-center gap-2 border rounded-full relative z-10 overflow-hidden duration-300 min-h-[50px] h-fit`}
      style={{ borderColor: isHover ? colorThree : colorOne }}
    >
      <p
        className={`uppercase font-bold tracking-widest text-sm  ${
          isHover ? "text-n-white" : "text-n-black"
        } duration-300`}
        style={{ color: isHover ? colorTwo : colorThree }}
      >
        {title}
      </p>
      {arrow && (
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-n-white -mr-2 duration-300`}
          style={{
            backgroundColor: isHover ? colorTwo : colorOne,
          }}
        >
          <motion.div
            initial={{ x: 0 }}
            animate={isHover ? { x: [-2, 2] } : { x: 0 }}
            transition={{
              repeat: isHover ? Infinity : 0,
              repeatType: "reverse",
            }}
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              color={isHover ? colorThree : colorTwo}
              className="duration-300"
            />
          </motion.div>
        </div>
      )}
      <motion.span
        initial={{ width: 40, height: 40, opacity: 0 }}
        animate={
          isHover
            ? {
                width: 500,
                height: 500,
                opacity: 1,
              }
            : { width: 40, height: 40, opacity: 0 }
        }
        transition={{
          opacity: { duration: 0.2 },
          width: { duration: isHover ? 2 : 0.2 },
          height: { duration: isHover ? 2 : 0.2 },
        }}
        className="absolute inline-block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-[-1] rounded-full"
        style={{ backgroundColor: colorThree }}
      ></motion.span>
    </motion.button>
  );
};

export default React.memo(CustomButton);
