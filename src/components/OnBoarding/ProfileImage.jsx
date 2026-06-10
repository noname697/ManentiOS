const ProfileImage = ({src, alt}) => {
    return (
        <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-blue-500 to-purple-600 opacity-60 blur"></div>

            <div className="relative  rounded-3xl border border-slate-700 bg-slate-950 p-2 shadow-2xl shadow-blue-500/20">
                <img src={src} alt={alt} className="h-80 w-full rounded-2xl object-cover" />
            </div>
        </div>
    )
}

export default ProfileImage