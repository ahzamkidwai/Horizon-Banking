import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankCard = ({ account, userName, showBalance }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>
          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-white font-semibold text-12">{userName}</h1>
              <h2 className="text-white font-semibold text-12">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-14">1234</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image
            src="/icons/Paypass.svg"
            height={24}
            width={20}
            alt="Paypass"
          />
          <Image
            src="/icons/mastercard.svg"
            height={32}
            width={45}
            alt="Mastercard"
            className="ml-5"
          />
        </div>

        <Image
          src="/icons/line.png"
          height={190}
          width={316}
          alt="Line"
          className="absolute top-0 left-0"
        />
      </Link>

      {/* COPY OF CARD NUMBERS */}
    </div>
  );
};

export default BankCard;
