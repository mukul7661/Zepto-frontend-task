"use client";

import React, { useState } from "react";
import ChipInput from "../components/ChipInput";

export default function Home() {
  const [availableItems, setAvailableItems] = useState<
    { name: string; email: string; icon: string }[]
  >([
    {
      name: "Laxmi devi",
      email: "laxmi@example.com",
      icon: `<svg width="30" height="30"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 66.358" id="avatar"><defs><clipPath id="a"><path fill="none" d="M53.456 52.022A30.766 30.766 0 0 1 30.9 61.829a31.163 31.163 0 0 1-3.833-.237 34.01 34.01 0 0 1-11.15-3.644 31.007 31.007 0 0 1-7.849-6.225l1.282-3.1 13.91-6.212c.625 3.723 7.806 8.175 7.806 8.175s7.213-3.412 8.087-8.211l12.777 6.281z" clip-rule="evenodd"></path></clipPath><clipPath id="b"><path fill="none" d="M14.112 46.496l6.814-3.042 10.209 13.978 10.328-13.938 5.949 2.831v20.033h-33.3V46.496z" clip-rule="evenodd"></path></clipPath></defs><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#3dbc93"></circle><path fill="#f9dca4" fill-rule="evenodd" d="M23.255 38.68l15.907.121v12.918l-15.907-.121V38.68z"></path><path fill-rule="evenodd" d="M39.165 38.778v3.58a7.783 7.783 0 0 1-.098 1.18 6.527 6.527 0 0 1-.395 1.405c-5.374 4.164-13.939.748-15.306-6.365z" opacity=".11"></path><path fill="#ffe8be" fill-rule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fill-rule="evenodd" d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.972 31.972 0 01-1.472-7.659zM44.135 24.046c3.07 1.339.465 7.686-1.466 7.657a31.978 31.978 0 001.466-7.657z"></path><path fill="#ecbe6a" fill-rule="evenodd" d="M44.123 24.17s7.96-11.785-2.636-16.334a11.881 11.881 0 0 0-12.87-5.22C22.775 3.805 20.604 6.7 20.604 6.7s-5.53 5.014-10.44 5.117a9.774 9.774 0 0 0 6.28 1.758c-.672 1.68-1.965 7.21 1.989 10.854 4.368-2.868 8.012-8.477 8.012-8.477s.982 3.257.207 4.86a18.879 18.879 0 0 0 7.922-3.531c2.542-2.036 3.893-4.297 5.31-4.326 3.256-.069 4.213 9.74 4.24 11.216z"></path><path fill="#498bd9" fill-rule="evenodd" d="M53.456 52.022A30.766 30.766 0 0 1 30.9 61.829a31.163 31.163 0 0 1-3.833-.237 34.01 34.01 0 0 1-11.15-3.644 31.007 31.007 0 0 1-7.849-6.225l1.282-3.1 13.91-6.212c.625 3.723 7.806 8.175 7.806 8.175s7.213-3.412 8.087-8.211l12.777 6.281z"></path><g clip-path="url(#a)"><path fill="#545f69" fill-rule="evenodd" d="M14.112 46.496l6.814-3.042 10.209 13.978 10.328-13.938 5.949 2.831v20.033h-33.3V46.496z"></path><g clip-path="url(#b)"><path fill="#434955" fill-rule="evenodd" d="M37.79 42.881h.732v21.382h-.732V42.881zm-14.775 0h.731v21.382h-.73V42.881zm-2.981 0h.731v21.382h-.731V42.881zm-2.944 0h.731v21.382h-.73V42.881zm-2.981 0h.731v21.382h-.731V42.881zm20.708 0h.731v21.382h-.731V42.881zm-2.981 0h.731v21.382h-.731V42.881zm-2.944 0h.731v21.382h-.731V42.881zm-2.981 0h.731v21.382h-.731V42.881zm20.785 0h.732v21.382h-.732V42.881zm-2.98 0h.73v21.382h-.73V42.881zm-2.944 0h.73v21.382h-.73z"></path></g></g><path fill="#58b0e0" fill-rule="evenodd" d="M23.265 41.27l7.802 9.316-6.305 3.553-4.823-10.591 3.326-2.278zM39.155 41.45l-8.088 9.136 6.518 3.553 4.777-10.719-3.207-1.97z"></path><path fill="#464449" fill-rule="evenodd" d="M21.637 23.157h6.416a1.58 1.58 0 011.119.464v.002a1.579 1.579 0 01.464 1.117v2.893a1.585 1.585 0 01-1.583 1.583h-6.416a1.578 1.578 0 01-1.116-.465h-.002a1.58 1.58 0 01-.464-1.118V24.74a1.579 1.579 0 01.464-1.117l.002-.002a1.578 1.578 0 011.116-.464zm6.416.85h-6.416a.735.735 0 00-.517.214l-.001.002a.735.735 0 00-.214.517v2.893a.73.73 0 00.215.517.735.735 0 00.517.215h6.416a.735.735 0 00.732-.732V24.74a.734.734 0 00-.214-.518.731.731 0 00-.518-.215zM34.548 23.157h6.416a1.58 1.58 0 011.118.464v.002a1.579 1.579 0 01.465 1.117v2.893a1.585 1.585 0 01-1.583 1.583h-6.416a1.58 1.58 0 01-1.117-.465l-.001-.002a1.58 1.58 0 01-.465-1.116V24.74a1.58 1.58 0 01.465-1.117l.002-.001a1.58 1.58 0 011.116-.465zm6.416.85h-6.416a.73.73 0 00-.517.214l-.001.002a.729.729 0 00-.214.517v2.893a.73.73 0 00.214.517l.001.001a.73.73 0 00.517.214h6.416a.735.735 0 00.732-.732V24.74a.734.734 0 00-.214-.518h-.001a.731.731 0 00-.517-.215z"></path><path fill="#464449" d="M29.415 24.506h3.845v.876h-3.845z"></path></g></g></svg>`,
    },
    {
      name: "Omparkash Kumar",
      email: "omparkash@example.com",
      icon: `<svg width="30" height="30"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#58b0e0"></circle><path fill="#f9dca4" fill-rule="evenodd" d="m23.255 38.68 15.907.121v12.918l-15.907-.121V38.68z"></path><path fill="#e6e6e6" fill-rule="evenodd" d="M43.971 58.905a30.967 30.967 0 0 1-25.843.14V48.417H43.97z"></path><path fill="#e9573e" fill-rule="evenodd" d="M33.403 61.7q-1.238.099-2.503.1-.955 0-1.895-.057l1.03-8.988h2.41z"></path><path fill="#677079" fill-rule="evenodd" d="M25.657 61.332A34.072 34.072 0 0 1 15.9 57.92a31.033 31.033 0 0 1-7.857-6.225l1.284-3.1 13.925-6.212c0 5.212 1.711 13.482 2.405 18.95z"></path><path fill-rule="evenodd" d="M39.165 38.759v3.231c-4.732 5.527-13.773 4.745-15.8-3.412z" opacity=".11"></path><path fill="#ffe8be" fill-rule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fill-rule="evenodd" d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.972 31.972 0 0 1-1.472-7.659zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 0 0 1.471-7.658z"></path><path fill="#464449" fill-rule="evenodd" d="M21.931 14.328c-3.334 3.458-2.161 13.03-2.161 13.03l-1.05-.495c-6.554-25.394 31.634-25.395 25.043 0l-1.05.495s1.174-9.572-2.16-13.03c-4.119 3.995-14.526 3.974-18.622 0z"></path><path fill="#677079" fill-rule="evenodd" d="M36.767 61.243a30.863 30.863 0 0 0 17.408-10.018l-1.09-2.631-13.924-6.212c0 5.212-1.7 13.393-2.394 18.861z"></path><path fill="#fff" fill-rule="evenodd" d="m39.162 41.98-7.926 6.465 6.573 5.913s1.752-9.704 1.353-12.378z"></path><path fill="#fff" fill-rule="evenodd" d="m23.253 41.98 7.989 6.465-6.645 5.913s-1.746-9.704-1.344-12.378z"></path><path fill="#e9573e" fill-rule="evenodd" d="m28.109 51.227 3.137-2.818 3.137 2.818-3.137 2.817-3.137-2.817z"></path><path fill="#434955" fill-rule="evenodd" d="M25.767 61.373a30.815 30.815 0 0 1-3.779-.88 2.652 2.652 0 0 1-.114-.093l-3.535-6.39 4.541-3.26h-4.752l1.017-6.851 4.11-2.599c.178 7.37 1.759 15.656 2.512 20.073zM36.645 61.266c.588-.098 1.17-.234 1.747-.384a56.83 56.83 0 0 0 2.034-.579l.134-.043 3.511-6.315-4.541-3.242h4.752l-1.017-6.817-4.11-2.586c-.178 7.332-1.758 15.571-2.51 19.966z"></path></g></g></svg>`,
    },
    {
      name: "Promila yadav",
      email: "promila@example.com",
      icon: `<svg width="30" height="30"  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 61.8 62.571" id="avatar"><defs><clipPath id="a"><path fill="none" d="M52.797 52.701c-.576-1.384-.505-2.763-4.626-4.83a2.862 2.862 0 0 0-.74-.357c-.488-.116-1.36-.286-1.792-.372-1.167 7.133-19.287 16.863-28.956-.047-1.04.244-3.219.752-3.801.907-4.093 1.819-3.625 2.926-4.165 4.406a30.896 30.896 0 0 0 44.08.293z" clip-rule="evenodd"></path></clipPath><clipPath id="b"><path fill="none" d="M24.258 39.172a1.633 1.633 0 0 0-.186 1.22 8.903 8.903 0 0 1-.45 3.562c-2.458 4.146 10.967 11.122 16.245 1.57.69-1.034-2.328-1.983-1.358-5.17a.895.895 0 0 0-.834-1.238s-5.344 4.481-13.417.056z" clip-rule="evenodd"></path></clipPath></defs><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><path fill="#ffe8be" fill-rule="evenodd" d="M31.129 8.432c21.281 0 12.988 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"></path><circle cx="30.9" cy="30.9" r="30.9" fill="#485a69"></circle><path fill="#f9dca4" fill-rule="evenodd" d="M52.797 52.701c-.608-1.462-.494-2.918-5.365-5.187-2.293-.542-8.21-1.319-9.328-3.4-.566-1.052-.43-2.535-.43-5.292l-12.93-.143c0 2.778.109 4.259-.524 5.299-1.19 1.957-8.935 3.384-11.338 4.024-4.093 1.819-3.625 2.925-4.165 4.406a30.896 30.896 0 0 0 44.08.293z"></path><path fill="#9f82bb" fill-rule="evenodd" d="M52.797 52.701c-.576-1.384-.505-2.763-4.626-4.83a2.862 2.862 0 0 0-.74-.357c-.488-.116-1.36-.286-1.792-.372-1.167 7.133-19.287 16.863-28.956-.047-1.04.244-3.219.752-3.801.907-4.093 1.819-3.625 2.926-4.165 4.406a30.896 30.896 0 0 0 44.08.293z"></path><g fill="#fff" clip-path="url(#a)"><circle cx="15.124" cy="50.844" r="1.561"></circle><circle cx="16.675" cy="57.08" r="1.561"></circle><circle cx="24.052" cy="57.397" r="1.561"></circle><circle cx="31.826" cy="61.01" r="1.561"></circle><circle cx="39.636" cy="56.904" r="1.561"></circle><circle cx="47.05" cy="57.065" r="1.561"></circle><circle cx="47.575" cy="50.555" r="1.561"></circle></g><path fill="#e9573e" fill-rule="evenodd" d="M45.238 36.967a6.24 6.24 0 0 0 7.535-2.61l3.7 1.753s-2.61 6.137-8.318 4.84c-2.126-.483-3.471-1.05-4.699-1.282-3.998-.755-5.39 3.056-1.005 4.111 2.415.58 5.555-.042 6.318-1.478 1.36 1.826-.883 4.965-2.885 4.89-5.495-.208-8.256-2.587-8.222-5.69.035-3.234 2.413-6.215 7.576-4.534z"></path><path fill="#e9573e" fill-rule="evenodd" d="M24.258 39.172a1.633 1.633 0 0 0-.186 1.22 8.903 8.903 0 0 1-.45 3.562c-2.458 4.146 10.967 11.122 16.245 1.57.69-1.034-2.328-1.983-1.358-5.17a.895.895 0 0 0-.834-1.238s-5.344 4.481-13.417.056z"></path><g clip-path="url(#b)"><path fill-rule="evenodd" d="m37.677 38.778 1.691.851c.04.87.089 4.6.702 5.537-1.807 4.15-14.135 3.408-15.874-6.55z" opacity=".11"></path></g><path fill="#f9dca4" fill-rule="evenodd" d="M19.11 24.183c-2.958 1.29-.442 7.41 1.42 7.383a30.847 30.847 0 0 1-1.42-7.383zM43.507 24.182c2.96 1.292.443 7.411-1.419 7.384a30.827 30.827 0 0 0 1.419-7.384z"></path><path fill="#ffe8be" fill-rule="evenodd" d="M31.114 8.666c8.722 0 12.377 6.2 12.601 13.367.307 9.81-5.675 21.43-12.6 21.43-6.56 0-12.706-12.018-12.333-21.928.26-6.953 3.814-12.869 12.332-12.869z"></path><path fill="#ecbe6a" fill-rule="evenodd" d="M38.361 16.587c-.174.728-3.174 6.273-7.684 8.137.756-1.317 1.97-2.892 2.058-4.4-2.162 3.173-10.983 6.337-16.2 4.79C15.364 5.79 30.182 6.256 31.183 6.31c1.002-.054 15.857-.34 14.686 18.982-5.835-1.09-7.83-5.543-7.508-8.705z"></path><path fill="#e9573e" fill-rule="evenodd" d="M16.754 19.778c1.271-18.485 27.928-17.772 28.88 0-4.396-12.378-25.125-12.187-28.88 0z"></path><path fill="#d6a956" fill-rule="evenodd" d="M43.66 24.657s-2.289 10.706-9.639 14.83c23.528-6.236 15.887-32.31 6.597-32.324-2.883-7.863-24.45-5.7-27.45 9.45s9.923 21.763 10.947 22.372a31.976 31.976 0 0 1-3.785-7.438 4.952 4.952 0 0 1-2.151-2.747 6.622 6.622 0 0 1-.212-3.412c-.726-.131-1.284-.275-1.284-.275a27.284 27.284 0 0 1 .06-5.017c.39-3.894 1.789-9.096 6.83-11.947 3.523-1.992 11.119-2.55 15.692.328 5.362 3.374 6.821 10.69 6.452 16.627z"></path></g></g></svg>`,
    },
    {
      name: "Pradeep kumar",
      email: "pradeep@example.com",
      icon: `<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#e9573e"></circle><path fill="#f9dca4" fill-rule="evenodd" d="m23.366 38.578 15.796.223v12.918l-15.907-.121.111-13.02z"></path><path fill="#58b0e0" fill-rule="evenodd" d="M53.478 51.993A30.814 30.814 0 0 1 30.9 61.8a31.226 31.226 0 0 1-3.837-.237A34.069 34.069 0 0 1 15.9 57.919a31.032 31.032 0 0 1-7.856-6.225l1.283-3.1 13.925-6.212c.625 3.723 7.814 8.175 7.814 8.175s7.22-3.412 8.096-8.211l12.79 6.281z"></path><path fill-rule="evenodd" d="M39.165 38.778v3.58c-.043.139-.074.324-.135.546a6.177 6.177 0 0 1-.243.687c-.17.409-1.345.063-1.568.415-5.375 4.164-11.988.868-13.855-5.245z" opacity=".11"></path><path fill="#ffe8be" fill-rule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fill-rule="evenodd" d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.974 31.974 0 0 1-1.472-7.658zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.992 31.992 0 0 0 1.471-7.658z"></path><path fill="#969696" fill-rule="evenodd" d="M18.7 26.997s-3.28-1.756-2.342-8.006 6.113-9.439 8.025-8.97A31.11 31.11 0 0 0 18.7 26.998zM43.84 26.997s3.28-1.756 2.343-8.006-6.122-9.3-8.034-8.83a30.517 30.517 0 0 1 5.692 16.836z"></path><path fill="#434955" fill-rule="evenodd" d="m23.255 41.241 7.811 9.316-6.312 3.553-4.828-10.591 3.329-2.278zM39.162 41.421l-8.096 9.136 6.524 3.553 4.782-10.719-3.21-1.97z"></path><path fill="#969696" fill-rule="evenodd" d="M31.128 35.672c-1.61 2.027-7.667 2.777-7.885-.859 1.412.65 2.595.497 4.694-1.183 2.1-1.679 3.21.305 3.21.305s1.183-1.984 3.283-.305c2.099 1.68 3.282 1.832 4.694 1.183-.218 3.636-6.386 2.886-7.996.859z"></path><circle cx="26.199" cy="27.557" r="3.187" fill="#e6e6e6"></circle><path fill="#434955" fill-rule="evenodd" d="M36.293 30.297c1.682-.548 1.382-.346 1.048-.208-1.418.208-1.773.133-2.096 0a2.746 2.746 0 0 0 1.048.208zm1.047-5.272h-2.094a2.734 2.734 0 0 1 1.047-.207 2.734 2.734 0 0 0-1.047.208h2.094zm6.478 1.21L40 26.998l-.11.025-.02-.11a3.62 3.62 0 0 0-.355-1.037 3.657 3.657 0 0 0-.653-.888l-.077-.076a3.65 3.65 0 0 0-1.103-.715 3.656 3.656 0 0 0-2.78 0 3.637 3.637 0 0 0-2.212 2.86l-.013.093h-2.865l-.012-.093a3.607 3.607 0 0 0-.346-1.116 3.653 3.653 0 0 0-.686-.953l-.076-.076a3.644 3.644 0 0 0-3.884-.715 3.637 3.637 0 0 0-2.187 2.705l-.02.111-.11-.025-3.773-.758-.038.757 3.878 1.19.06.02.012.06a3.626 3.626 0 0 0 .932 1.805l.066.066a3.658 3.658 0 0 0 1.182.79 3.64 3.64 0 0 0 2.776.001 3.657 3.657 0 0 0 1.181-.79l.001-.001.001-.001a3.626 3.626 0 0 0 1.023-2.018l.014-.092h2.878l.014.092a3.608 3.608 0 0 0 .348 1.09 3.652 3.652 0 0 0 .608.86l.068.069a3.657 3.657 0 0 0 1.182.79 3.64 3.64 0 0 0 2.776.001 3.657 3.657 0 0 0 1.18-.79l.002-.001v-.001a3.663 3.663 0 0 0 .636-.856 3.61 3.61 0 0 0 .359-.997l.012-.061.06-.02 3.91-1.195-.022-.761zm-16.571-1.21a2.745 2.745 0 0 1 .857.564h.002l.032.031a2.74 2.74 0 0 1 0 3.874l-.002.002a2.74 2.74 0 0 1-3.873 0l-.032-.032v-.002a2.745 2.745 0 0 1-.563-.858 2.741 2.741 0 0 1 0-2.094 2.743 2.743 0 0 1 1.484-1.484 2.742 2.742 0 0 1 2.095 0zm10.907.672a2.651 2.651 0 0 0-.492-.387 2.633 2.633 0 0 0-2.658-.047 2.656 2.656 0 0 0-.492.357 2.48 2.48 0 0 0-.247.26 2.64 2.64 0 0 0-.387.63 2.511 2.511 0 0 0-.098.262 2.62 2.62 0 0 0-.119.785c0 .086.005.172.013.257a2.615 2.615 0 0 0 .204.79 2.534 2.534 0 0 0 .118.239 2.64 2.64 0 0 0 .436.575v.002l.043.042.02.018.017.016a2.641 2.641 0 0 0 .26.21 2.598 2.598 0 0 0 .69.35 2.642 2.642 0 0 0 2.691-.636l.003-.002.05-.052a2.636 2.636 0 0 0-.05-3.67z"></path><circle cx="36.293" cy="27.557" r="2.755" fill="#e6e6e6"></circle><circle cx="26.199" cy="27.557" r="2.755" fill="#e6e6e6"></circle></g></g></svg>`,
    },
    {
      name: "Sharmila yadav",
      email: "sharmila@example.com",
      icon: `<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#e9573e"></circle><path fill="#f9dca4" fill-rule="evenodd" d="m23.366 38.578 15.796.223v12.918l-15.907-.121.111-13.02z"></path><path fill="#58b0e0" fill-rule="evenodd" d="M53.478 51.993A30.814 30.814 0 0 1 30.9 61.8a31.226 31.226 0 0 1-3.837-.237A34.069 34.069 0 0 1 15.9 57.919a31.032 31.032 0 0 1-7.856-6.225l1.283-3.1 13.925-6.212c.625 3.723 7.814 8.175 7.814 8.175s7.22-3.412 8.096-8.211l12.79 6.281z"></path><path fill-rule="evenodd" d="M39.165 38.778v3.58c-.043.139-.074.324-.135.546a6.177 6.177 0 0 1-.243.687c-.17.409-1.345.063-1.568.415-5.375 4.164-11.988.868-13.855-5.245z" opacity=".11"></path><path fill="#ffe8be" fill-rule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fill-rule="evenodd" d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.974 31.974 0 0 1-1.472-7.658zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.992 31.992 0 0 0 1.471-7.658z"></path><path fill="#969696" fill-rule="evenodd" d="M18.7 26.997s-3.28-1.756-2.342-8.006 6.113-9.439 8.025-8.97A31.11 31.11 0 0 0 18.7 26.998zM43.84 26.997s3.28-1.756 2.343-8.006-6.122-9.3-8.034-8.83a30.517 30.517 0 0 1 5.692 16.836z"></path><path fill="#434955" fill-rule="evenodd" d="m23.255 41.241 7.811 9.316-6.312 3.553-4.828-10.591 3.329-2.278zM39.162 41.421l-8.096 9.136 6.524 3.553 4.782-10.719-3.21-1.97z"></path><path fill="#969696" fill-rule="evenodd" d="M31.128 35.672c-1.61 2.027-7.667 2.777-7.885-.859 1.412.65 2.595.497 4.694-1.183 2.1-1.679 3.21.305 3.21.305s1.183-1.984 3.283-.305c2.099 1.68 3.282 1.832 4.694 1.183-.218 3.636-6.386 2.886-7.996.859z"></path><circle cx="26.199" cy="27.557" r="3.187" fill="#e6e6e6"></circle><path fill="#434955" fill-rule="evenodd" d="M36.293 30.297c1.682-.548 1.382-.346 1.048-.208-1.418.208-1.773.133-2.096 0a2.746 2.746 0 0 0 1.048.208zm1.047-5.272h-2.094a2.734 2.734 0 0 1 1.047-.207 2.734 2.734 0 0 0-1.047.208h2.094zm6.478 1.21L40 26.998l-.11.025-.02-.11a3.62 3.62 0 0 0-.355-1.037 3.657 3.657 0 0 0-.653-.888l-.077-.076a3.65 3.65 0 0 0-1.103-.715 3.656 3.656 0 0 0-2.78 0 3.637 3.637 0 0 0-2.212 2.86l-.013.093h-2.865l-.012-.093a3.607 3.607 0 0 0-.346-1.116 3.653 3.653 0 0 0-.686-.953l-.076-.076a3.644 3.644 0 0 0-3.884-.715 3.637 3.637 0 0 0-2.187 2.705l-.02.111-.11-.025-3.773-.758-.038.757 3.878 1.19.06.02.012.06a3.626 3.626 0 0 0 .932 1.805l.066.066a3.658 3.658 0 0 0 1.182.79 3.64 3.64 0 0 0 2.776.001 3.657 3.657 0 0 0 1.181-.79l.001-.001.001-.001a3.626 3.626 0 0 0 1.023-2.018l.014-.092h2.878l.014.092a3.608 3.608 0 0 0 .348 1.09 3.652 3.652 0 0 0 .608.86l.068.069a3.657 3.657 0 0 0 1.182.79 3.64 3.64 0 0 0 2.776.001 3.657 3.657 0 0 0 1.18-.79l.002-.001v-.001a3.663 3.663 0 0 0 .636-.856 3.61 3.61 0 0 0 .359-.997l.012-.061.06-.02 3.91-1.195-.022-.761zm-16.571-1.21a2.745 2.745 0 0 1 .857.564h.002l.032.031a2.74 2.74 0 0 1 0 3.874l-.002.002a2.74 2.74 0 0 1-3.873 0l-.032-.032v-.002a2.745 2.745 0 0 1-.563-.858 2.741 2.741 0 0 1 0-2.094 2.743 2.743 0 0 1 1.484-1.484 2.742 2.742 0 0 1 2.095 0zm10.907.672a2.651 2.651 0 0 0-.492-.387 2.633 2.633 0 0 0-2.658-.047 2.656 2.656 0 0 0-.492.357 2.48 2.48 0 0 0-.247.26 2.64 2.64 0 0 0-.387.63 2.511 2.511 0 0 0-.098.262 2.62 2.62 0 0 0-.119.785c0 .086.005.172.013.257a2.615 2.615 0 0 0 .204.79 2.534 2.534 0 0 0 .118.239 2.64 2.64 0 0 0 .436.575v.002l.043.042.02.018.017.016a2.641 2.641 0 0 0 .26.21 2.598 2.598 0 0 0 .69.35 2.642 2.642 0 0 0 2.691-.636l.003-.002.05-.052a2.636 2.636 0 0 0-.05-3.67z"></path><circle cx="36.293" cy="27.557" r="2.755" fill="#e6e6e6"></circle><circle cx="26.199" cy="27.557" r="2.755" fill="#e6e6e6"></circle></g></g></svg>`,
    },
    {
      name: "Ranbir singh",
      email: "ranbir@example.com",
      icon: `<svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.8 61.8" id="avatar"><g data-name="Layer 2"><g data-name="—ÎÓÈ 1"><circle cx="30.9" cy="30.9" r="30.9" fill="#e9573e"></circle><path fill="#f9dca4" fill-rule="evenodd" d="m23.366 38.578 15.796.223v12.918l-15.907-.121.111-13.02z"></path><path fill="#58b0e0" fill-rule="evenodd" d="M53.478 51.993A30.814 30.814 0 0 1 30.9 61.8a31.226 31.226 0 0 1-3.837-.237A34.069 34.069 0 0 1 15.9 57.919a31.032 31.032 0 0 1-7.856-6.225l1.283-3.1 13.925-6.212c.625 3.723 7.814 8.175 7.814 8.175s7.22-3.412 8.096-8.211l12.79 6.281z"></path><path fill-rule="evenodd" d="M39.165 38.778v3.58c-.043.139-.074.324-.135.546a6.177 6.177 0 0 1-.243.687c-.17.409-1.345.063-1.568.415-5.375 4.164-11.988.868-13.855-5.245z" opacity=".11"></path><path fill="#ffe8be" fill-rule="evenodd" d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.266 0-21.281-35.266 0-35.266z"></path><path fill="#f9dca4" fill-rule="evenodd" d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.974 31.974 0 0 1-1.472-7.658zM44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.992 31.992 0 0 0 1.471-7.658z"></path><path fill="#969696" fill-rule="evenodd" d="M18.7 26.997s-3.28-1.756-2.342-8.006 6.113-9.439 8.025-8.97A31.11 31.11 0 0 0 18.7 26.998zM43.84 26.997s3.28-1.756 2.343-8.006-6.122-9.3-8.034-8.83a30.517 30.517 0 0 1 5.692 16.836z"></path><path fill="#434955" fill-rule="evenodd" d="m23.255 41.241 7.811 9.316-6.312 3.553-4.828-10.591 3.329-2.278zM39.162 41.421l-8.096 9.136 6.524 3.553 4.782-10.719-3.21-1.97z"></path><path fill="#969696" fill-rule="evenodd" d="M31.128 35.672c-1.61 2.027-7.667 2.777-7.885-.859 1.412.65 2.595.497 4.694-1.183 2.1-1.679 3.21.305 3.21.305s1.183-1.984 3.283-.305c2.099 1.68 3.282 1.832 4.694 1.183-.218 3.636-6.386 2.886-7.996.859z"></path><circle cx="26.199" cy="27.557" r="3.187" fill="#e6e6e6"></circle><path fill="#434955" fill-rule="evenodd" d="M36.293 30.297c1.682-.548 1.382-.346 1.048-.208-1.418.208-1.773.133-2.096 0a2.746 2.746 0 0 0 1.048.208zm1.047-5.272h-2.094a2.734 2.734 0 0 1 1.047-.207 2.734 2.734 0 0 0-1.047.208h2.094zm6.478 1.21L40 26.998l-.11.025-.02-.11a3.62 3.62 0 0 0-.355-1.037 3.657 3.657 0 0 0-.653-.888l-.077-.076a3.65 3.65 0 0 0-1.103-.715 3.656 3.656 0 0 0-2.78 0 3.637 3.637 0 0 0-2.212 2.86l-.013.093h-2.865l-.012-.093a3.607 3.607 0 0 0-.346-1.116 3.653 3.653 0 0 0-.686-.953l-.076-.076a3.644 3.644 0 0 0-3.884-.715 3.637 3.637 0 0 0-2.187 2.705l-.02.111-.11-.025-3.773-.758-.038.757 3.878 1.19.06.02.012.06a3.626 3.626 0 0 0 .932 1.805l.066.066a3.658 3.658 0 0 0 1.182.79 3.64 3.64 0 0 0 2.776.001 3.657 3.657 0 0 0 1.181-.79l.001-.001.001-.001a3.626 3.626 0 0 0 1.023-2.018l.014-.092h2.878l.014.092a3.608 3.608 0 0 0 .348 1.09 3.652 3.652 0 0 0 .608.86l.068.069a3.657 3.657 0 0 0 1.182.79 3.64 3.64 0 0 0 2.776.001 3.657 3.657 0 0 0 1.18-.79l.002-.001v-.001a3.663 3.663 0 0 0 .636-.856 3.61 3.61 0 0 0 .359-.997l.012-.061.06-.02 3.91-1.195-.022-.761zm-16.571-1.21a2.745 2.745 0 0 1 .857.564h.002l.032.031a2.74 2.74 0 0 1 0 3.874l-.002.002a2.74 2.74 0 0 1-3.873 0l-.032-.032v-.002a2.745 2.745 0 0 1-.563-.858 2.741 2.741 0 0 1 0-2.094 2.743 2.743 0 0 1 1.484-1.484 2.742 2.742 0 0 1 2.095 0zm10.907.672a2.651 2.651 0 0 0-.492-.387 2.633 2.633 0 0 0-2.658-.047 2.656 2.656 0 0 0-.492.357 2.48 2.48 0 0 0-.247.26 2.64 2.64 0 0 0-.387.63 2.511 2.511 0 0 0-.098.262 2.62 2.62 0 0 0-.119.785c0 .086.005.172.013.257a2.615 2.615 0 0 0 .204.79 2.534 2.534 0 0 0 .118.239 2.64 2.64 0 0 0 .436.575v.002l.043.042.02.018.017.016a2.641 2.641 0 0 0 .26.21 2.598 2.598 0 0 0 .69.35 2.642 2.642 0 0 0 2.691-.636l.003-.002.05-.052a2.636 2.636 0 0 0-.05-3.67z"></path><circle cx="36.293" cy="27.557" r="2.755" fill="#e6e6e6"></circle><circle cx="26.199" cy="27.557" r="2.755" fill="#e6e6e6"></circle></g></g></svg>`,
    },
  ]);

  return (
    <div className="App">
      <ChipInput
        availableItems={availableItems}
        setAvailableItems={setAvailableItems}
      />
    </div>
  );
}
