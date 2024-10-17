import React from "react";

/**
 *
 * @param {String} Number
 * @returns
 */
export function ZapLink({ Number }) {
  return (
    <>
      {/* Link para zap */}
      <div className="w-7 rounded-full green_filter translate-y-1">
        <a href={`https://wa.me/${Number}`} className="text-sm font-light">
          <img src="/icon/WhatsApp.svg" alt="" className="w-full h-full" />
        </a>
      </div>
    </>
  );
}
