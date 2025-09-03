"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer1() {
  return (
    <Footer className="bg-gradient-to-r from-green-900 via-green-950 to-green-900 text-white rounded-t-3xl shadow-xl">
      <div className="w-full px-10 md:px-24 lg:px-40 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-extrabold tracking-tight">Hotel Forest</h1>
            <p className="text-gray-300 max-w-xs">
              Experience luxury and comfort at the heart of nature. Relax, unwind, and create unforgettable memories.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="hover:text-green-300 transition">
                  Hotel Forest
                </FooterLink>
                <FooterLink href="#" className="hover:text-green-300 transition">
                  Services
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow Us" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="hover:text-green-300 transition">
                  Github
                </FooterLink>
                <FooterLink href="#" className="hover:text-green-300 transition">
                  Discord
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="hover:text-green-300 transition">
                  Privacy Policy
                </FooterLink>
                <FooterLink href="#" className="hover:text-green-300 transition">
                  Terms &amp; Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider className="my-8 border-gray-700" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <FooterCopyright
            href="#"
            by="Hotel Forest™"
            year={new Date().getFullYear()}
          />
          <div className="flex space-x-6">
            <FooterIcon
              href="#"
              icon={BsFacebook}
              className="hover:text-green-300 transition-transform transform hover:scale-110"
            />
            <FooterIcon
              href="#"
              icon={BsInstagram}
              className="hover:text-green-300 transition-transform transform hover:scale-110"
            />
            <FooterIcon
              href="#"
              icon={BsTwitter}
              className="hover:text-green-300 transition-transform transform hover:scale-110"
            />
            <FooterIcon
              href="#"
              icon={BsGithub}
              className="hover:text-green-300 transition-transform transform hover:scale-110"
            />
            <FooterIcon
              href="#"
              icon={BsDribbble}
              className="hover:text-green-300 transition-transform transform hover:scale-110"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
