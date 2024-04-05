import React, { useEffect, useState } from 'react'


const UpBtn = () => {
  const [isVisible, setVisible] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleShowOfScroll = () => {
    let heightOf = 300;

    const heightOfPage = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log(heightOfPage);

    if (heightOfPage > heightOf) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleShowOfScroll);

    return () => {
      window.removeEventListener('scroll', handleShowOfScroll);
    }
  }, []);

  return (
    <>
      {
        isVisible && (
          <div className="scroll-up-btn" onClick={handleScrollUp}>
            <i class="fa-solid fa-arrow-up"></i>
          </div>
        )
      }
    </>
  )
}


export default UpBtn