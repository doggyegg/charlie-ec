import { ITreeItem } from '../types/util.ts';

export default {
	/**
	 * 树转平
	 * @params treeData:多棵树树结构
	 * @return flatData 展平的数据
	 */
	Tree2Flat(treeData: Array<ITreeItem>): Array<ITreeItem> {
		if (!Array.isArray(treeData)) return treeData;

		const result = [];
		const recurFunc = (tree, total) => {
			tree.forEach(item => {
				total.push(item);
				if (item.children?.length > 0) {
					recurFunc(item.children, total);
				}
			});
		};

		recurFunc(treeData, result);

		return result;
	},

	/**
	 * 平转树
	 * @params flatData 展平的数据
	 * @return treeData:多棵树树结构
	 */
	Flat2Tree(flatData: Array<ITreeItem>): Array<ITreeItem> {
		const result = [];
		const flatMap = new Map();

		flatData.forEach(item => {
			flatMap.set(item.id, item);
		});
		flatData.forEach(item => {
			const { pid } = item;
			const parent = flatMap.get(pid);

			if (parent) {
				parent.children = parent.children || [];
				parent.children.push(item);
			} else {
				result.push(item);
			}
		});
		return result;
	}
};
