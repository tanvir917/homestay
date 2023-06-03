    const iconsList = {
    location: FaMapMarkerAlt,
    date: FaCalendarAlt,
    peopleCount: FaUser,
  }
  
const InputComponent = (
    ({ isLoading, containerRef, form, name, ...props }, ref) => {
      const itemType = name && form?.formSchema[name].type
      const InputIcon = isLoading ? FaSpinner : iconsList[itemType || "location"]
  
      return (
        <div className="relative w-full group" ref={containerRef}>
          <InputCore data-input ref={ref} name={name} {...props} />
          <IconContainer title="toggle" data-toggle>
            <InputIcon className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          </IconContainer>
        </div>
      )
    }
  )