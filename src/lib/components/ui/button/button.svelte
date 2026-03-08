<script lang="ts">
	import { Button as ButtonPrimitive } from 'bits-ui';
	import { type Props, buttonVariants } from './index.js';

	type $$Props = Props;

	let className: $$Props['class'] = undefined;
	export let variant: $$Props['variant'] = 'default';
	export let size: $$Props['size'] = 'default';
	export { className as class };
</script>

<ButtonPrimitive.Root
	class={`${buttonVariants({ variant, size })} ${className ?? ''}`.trim()}
	type="button"
	{...$$restProps}
>
	<slot />
</ButtonPrimitive.Root>
