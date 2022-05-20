import { Vue } from 'vue/types/vue';
import { KeyValueObj, FrogConfig, ConfirmPluginParams, NoReturnFunc } from '@/common/interfaces/common';

declare module 'vue/types/vue' {
	interface Vue {
		/** Used to show feedback after an activity. The difference with Notification is that the latter is often used to show a system level passive notification. */
		$toast(msg: string | string[], duration?: number): void;
		$frog(config: FrogConfig): void;
		$confirm(confirmPluginParams: ConfirmPluginParams): void;
		$loading: {
			show: NoReturnFunc;
			hide: NoReturnFunc;
		};
		$addFrog(productId: number, url: string, keyValues: KeyValueObj[]): void;
		$addFrogList(productId: number, urlList: string[], keyValues: KeyValueObj[]): void;
		$webTrack: {
			send: (options: Object) => void;
			setUserId: (userId: number) => void;
		};
	}
}
