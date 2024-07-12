import { ITreeItem } from '../types/util.ts';

export default {
	/**
	 * 树转平
	 * @params treeData:多棵树树结构
	 * @return flatData 展平的数据
	 */
	Tree2Flat(treeData: Array<ITreeItem>): Array<ITreeItem> {
		if (!Array.isArray(treeData)) return treeData;

		const result: Array<ITreeItem> = [];
		const recurFunc = (tree: Array<ITreeItem>, total: Array<ITreeItem>) => {
			tree.forEach(item => {
				total.push(item);
				if ((item.children?.length as any) > 0) {
					recurFunc(item.children as any, total);
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
		const result: ITreeItem[] = [];
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
	},

	/**
	 * 深度遍历树
	 * @params treeData:树数据  cb:每次执行的回调函数
	 * @return void
	 */
	traverseTreeDFC(treeData: Array<ITreeItem>, cb: Function, childrenFlag: string = 'children') {
		if (!treeData || typeof cb !== 'function') return treeData;
		if (!Array.isArray(treeData) && typeof treeData === 'object') {
			treeData = [treeData];
		}
		treeData.forEach(item => {
			cb(item);
			if ((item[childrenFlag] as Array<ITreeItem>).length > 0) {
				this.traverseTreeDFC(item[childrenFlag], cb, childrenFlag);
			}
		});
	},
	/**
	 * 广度遍历树
	 * @params treeData cb:每次执行的回调函数
	 * @return void
	 */
	traverseTreeBFC(treeData: Array<ITreeItem>, cb: Function, childrenFlag: string = 'children') {
		if (!treeData || typeof cb !== 'function') return treeData;
		if (!Array.isArray(treeData) && typeof treeData === 'object') {
			treeData = [treeData];
		}
		while (treeData.length > 0) {
			const node = treeData.shift();

			if (node) {
				cb(node);
			}
			if ((node[childrenFlag] as Array<ITreeItem>)?.length > 0) {
				(node[childrenFlag] as Array<ITreeItem>).forEach(node1 => {
					treeData.push(node1);
				});
			}
		}
	}
};
