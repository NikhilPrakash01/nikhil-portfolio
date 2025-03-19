import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://www.facebook.com/profile.php?id=100008495255883"
            aria-label="Facebook"
          >
            <i class="ri-facebook-circle-line text-gray-400"></i>
          </a>
          {/* <a href="#" ><i class="ri-twitter-x-line text-gray-400">
           
        </i></a> */}
          <a href="mailto:nikhilnawaab303@gmail.com" aria-label="Mail">
            <i class="ri-mail-ai-line text-gray-400"></i>
          </a>
          <a
            href="https://www.instagram.com/nikhilnawaab303?igsh=NmgwM3VsMXFtbDkw"
            aria-label="Instagram"
          >
            <i class="ri-instagram-line text-gray-400"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-prakash-303n/"
            aria-label="linkedin"
          >
            <i class="ri-linkedin-box-line text-gray-400"></i>
          </a>
          <a href="https://github.com/NikhilPrakash01" aria-label="github">
            {" "}
            <i class="ri-github-line text-gray-400"></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
