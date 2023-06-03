const GuestOptionComponent = ({
    form,
    name,
    option,
  }) => (
    <OptionBase className="flex items-center justify-between">
      <div>
        <Text>{option.label}</Text>
        <SmallText>{option.description}</SmallText>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <GuestButton
          onClick={form.onPlusClick(option, name)}
          disabled={form.getIsOptionDisabled(option, "plus")}
        >
          <FaPlus className="w-3 h-3" />
        </GuestButton>
        <Text>{option.value}</Text>
        <GuestButton
          onClick={form.onMinusClick(option, name)}
          disabled={form.getIsOptionDisabled(option, "minus")}
        >
          <FaMinus className="w-3 h-3" />
        </GuestButton>
      </div>
    </OptionBase>
  )