export interface Perks {
	
	/**
	 * @minLength 3
	 * @maxLength 50
	 */
	name: string
	description?: string
	/**
	 * @minLength 25
	 * @maxLength 25
	 */
	role: string
	/**
	 * @minLength 25
	 * @maxLength 25
	 */
	character: string
	/**
	 * @minLength 25
	 * @maxLength 25
	 */
	image: string
}
