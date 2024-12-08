"use client";
import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../Spinner/Spinner";

const LoadingWholePage = ({ loading }: { loading: boolean }) => {
  const controlerLoading = useAnimationControls();

  useEffect(() => {
    if (!loading) {
      controlerLoading.start({ y: "-100%", transition: { duration: 0.3 } });
    }
  }, [controlerLoading, loading]);

  return (
    <motion.div
      initial={!loading ? { y: "-100%" } : { y: 0, display: "flex" }}
      animate={controlerLoading}
      className="absolute w-full h-full flex top-0 left-0 z-50 justify-center items-center bg-n-main"
    >
      <Spinner />
    </motion.div>
  );
};

export default LoadingWholePage;
