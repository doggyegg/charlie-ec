import { Input, Select } from 'antd';
const { Option } = Select;
const { Search } = Input;

export default function CInput(props) {
	const { selectData, onSearch } = props;

	const _SelectBefore = () => {
		if (!selectData) return null;
		const { defaultValue, options } = selectData;

		return (
			<Select defaultValue={defaultValue}>
				{options.map(opt => {
					return (
						<Option key={opt.value} value={opt.value}>
							{opt.label}
						</Option>
					);
				})}
			</Select>
		);
	};
	return typeof onSearch === 'function' ? (
		<Search addonBefore={<_SelectBefore />} onSearch={onSearch} />
	) : (
		<Input addonBefore={<_SelectBefore />} />
	);
}
